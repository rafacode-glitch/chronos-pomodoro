import styles from './Heading.module.css';

type HeadingProps = {
  children: React.ReactNode;
  attr?: number;
  attr2?: string;
};

export function Heading(props: HeadingProps) {
  return <h1 className={styles.heading}>{props.children}</h1>;
}
