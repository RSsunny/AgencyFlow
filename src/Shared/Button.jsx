const Button = ({ text, btnbg }) => {
  return <button className={`px-4 py-2 rounded-md  ${btnbg}`}>{text}</button>;
};

export default Button;
