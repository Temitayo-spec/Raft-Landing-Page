import Link from 'next/link';
import { LinkTo } from './styles';

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="/"
    >
      Get Started
    </LinkTo>
  );
};

export default GetStartedButton;
