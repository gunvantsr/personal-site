const Button: React.FC<{ text: string }> = ({ text }) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = event.target as HTMLButtonElement;
    target.innerText = 'You clicked me!';
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
