import ContactLink from "./ContactLink";

const contactLinks = [
  {
    title: "my youtube channel",
    link: "https://youtube.com",
    x: 89,
    y: 59,
  },
  {
    title: "my instagram",
    link: "https://instagram.com",
    x: 76,
    y: 19,
  },
  {
    title: "my email",
    link: "mailto:noahdarcy.dev@gmail.com",
    x: 29,
    y: 34,
  },
  {
    title: "my phone number",
    link: "tel:+12483828428",
    x: 14,
    y: 73,
  },
];

const inputStyles =
  "border-b-secondary text-secondary mb-[2rem] rounded-[1rem] border-b-2 py-[0.5rem] pl-[0.5rem] font-sans outline-none";

const Contact = () => {
  return (
    <section className="relative flex h-screen w-full flex-col py-[14rem]">
      <h1 className="pl-[5rem] font-sans text-[7rem] font-bold uppercase">
        Get in touch!
      </h1>

      {contactLinks.map((elem) => (
        <ContactLink
          title={elem.title}
          link={elem.link}
          x={elem.x}
          y={elem.y}
          key={elem.title}
        />
      ))}

      <form
        action=""
        className="ml-[20rem] flex w-[40%] flex-col justify-center self-center pt-[10rem] pb-[5rem]"
      >
        <label htmlFor="name">Name</label>
        <input
          className={inputStyles}
          type="text"
          id="name"
          name="name"
          placeholder="Noah D'Arcy"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          className={inputStyles}
          type="email"
          id="email"
          name="email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          className={inputStyles}
          id="message"
          name="message"
          cols={30}
          rows={5}
          placeholder="Your message here..."
          required
        ></textarea>

        <button className="w-fit" type="submit">
          Submit
        </button>
      </form>

      <p className="self-end pt-[4rem] pr-[10rem]">{"\u00A9"} Copyright 2025</p>
    </section>
  );
};

export default Contact;
