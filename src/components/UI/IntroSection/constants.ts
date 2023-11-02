import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ["Introducing RAFT's Next-", 'Gen Cards'];
export const desktopParagraphPhrase = [
  " Discover RAFT's latest innovation – our new cards. Elevate your banking",
  'experience with cutting-edge features, security, and unprecedented',
  'convenience.',
];

// For mobile
export const mobileHeaderPhrase = ["Introducing RAFT's", 'Next-Gen Cards'];
export const mobileParagraphPhrase = [
  " Discover RAFT's latest innovation – our new cards.",
  ' Elevate your banking experience with cutting-edge',
  'features, security, and unprecedented',
  'convenience.',
];

export const edges = [
  {
    point: 'Contactless Technology',
    details:
      'Our new cards come equipped with contactless technology, allowing you to make swift, secure payments with a simple tap.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Personalization',
    details:
      'Customize your card to reflect your unique style. Choose from a range of designs that suit your personality.',
    icon: ic_identification,
  },
  {
    point: 'Enhanced Security',
    details:
      'Your peace of mind is our priority. Our cards feature advanced security measures to protect your transactions and data.',
    icon: ic_lock_closed,
  },
];
