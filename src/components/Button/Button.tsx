import Button from 'react-bootstrap/Button';

interface IButtonProps {
  children: string;
  onClick: () => void;
}

const MyButton =({children, onClick}: IButtonProps) => {
  return (
    <>
      <Button variant="outline-dark-green" onClick={onClick}>{children}</Button>{' '}
    </>
  );
}

export default MyButton;
