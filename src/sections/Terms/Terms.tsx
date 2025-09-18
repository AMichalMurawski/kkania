import { FC, useEffect, useState } from "react";
import styles from "./Terms.module.css";
import { useTerms } from "../../context";
import { ContentItem, TermsProps, TermsSection } from "../../utils";
import parse from "html-react-parser";

const Terms: FC = () => {
    const { data: terms } = useTerms();
    const [newTerms, setNewTerms] = useState<TermsProps | null>(null);
    
    const replacePlaceholders = (text: string): string => {
        if (!terms?.data) return text;

        return text.replace(/\[(.+?)\]/g, (match, key) => {
            const typedKey = key.trim() as keyof typeof terms.data;
            return terms.data[typedKey] ?? match;
        });
    };

    const processTerms = (): TermsProps | null => {
        if (!terms) return null;

        return {
            ...terms,
            title: replacePlaceholders(terms.title),
            siteName: replacePlaceholders(terms.siteName),
            lastUpdated: replacePlaceholders(terms.lastUpdated),
            sections: terms.sections.map((section: TermsSection) => ({
                ...section,
                content: section.content.map((item: ContentItem) => {
                    if (item.type === "paragraph") {
                        return {
                            ...item,
                            text: replacePlaceholders(item.text),
                        };
                    }

                    if (item.type === "list") {
                        return {
                            ...item,
                            items: item.items.map((listItem: string) =>
                                replacePlaceholders(listItem)
                            ),
                        };
                    }

                    return item;
                }),
            })),
        };
    };

    useEffect(() => {
        if (terms) {
            const processed = processTerms();
            setNewTerms(processed);
        }
    }, [terms]);

    return (
        <section className={styles.section}>
            <h2>{parse(`${newTerms?.title}`)}</h2>
            <p className={styles.siteName}>{parse(`${newTerms?.siteName}`)}</p>
            <p className={styles.lastUpdated}>Data ostatniej aktualizacji: {parse(`${newTerms?.lastUpdated}`)}</p>
            <div className={styles.content}>
                {newTerms?.sections.map(section => {
                    let subId: number = 0;
                    return (<div key={section.id}>
                        <h3 className={styles.subtitle}>&#167;{parse(section.id)}. {parse(section.heading)}</h3>
                        {section.content.map(content => {
                            if (content.type === "paragraph") {
                                ++subId;
                                return <p><span className={styles.number}>{parse(section.id)}.{subId}.</span> {parse(content.text)}</p>
                            }

                            if (content.type === "list") {
                                return <ol className={styles.list}>
                                    {content.items.map(item => 
                                        <li>{parse(item)}</li>
                                    )}
                                </ol>
                            }
                        })}
                    </div>
                    )
                }
                )}
            </div>
        </section>
    );
};

export default Terms;