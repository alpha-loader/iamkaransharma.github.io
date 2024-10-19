import classes from "@/components/about/about_text.module.css";
export default function AboutText(props: {
  children?: React.ReactNode;
  content: string;
  id: number;
}) {


  return (
          <div
            className={classes.text}
            dangerouslySetInnerHTML={{ __html: props.content }}
          ></div>
  );
}
