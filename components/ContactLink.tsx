import classNames from "classnames";

interface ContactLinkProps {
  title: string;
  link: string;
  x: number;
  y: number;
}

const ContactLink = ({ title, link, x, y }: ContactLinkProps) => {
  const xcoord = "top-[${" + x + "}%]";
  const ycoord = "left-[${" + y + "}%]";

  const classes = classNames("absolute", xcoord, ycoord);

  return (
    <a className={classes} href={`${link}`}>
      {title}
    </a>
  );
};

export default ContactLink;
