
import ic_banknotes from '../../../../public/svgs/ic_banknotes.svg';
import ic_circle_stack from '../../../../public/svgs/ic_circle_stack.svg';
import ic_arrows_left_right from '../../../../public/svgs/ic_arrows_right_left.svg';

// For desktop
export const desktopHeaderPhrase = ['Your Financial Freedom,', 'Your Way'];
export const desktopParagraphPhrase = [
  'We believe that managing your finances should be effortless and cost-effective.',
  "That's why we offer you the freedom you deserve.",
];
export const desktopBriefNotePhrase = [
  'Smart investments,',
  'secure payments, and',
  'expert guidance, all in',
  'one place.',
];

// For mobile
export const mobileHeaderPhrase = ['Your Financial', 'Freedom, Your Way'];
export const mobileParagraphPhrase = [
  'We believe that managing your finances should be',
  "effortless and cost-effective. That's why we offer",
  ' you the freedom you deserve.',
];

export const mobileBriefNotePhrase = [
  'Smart',
  ' investments,',
  'secure',
  ' payments,',
  'and expert',
  'guidance, all',
  'in one place.',
];

export const edges = [
  {
    point: 'No minimum balance fees',
    details:
      'Say goodbye to minimum balance fees. Your account, your balance—no hidden charges',
    icon: ic_banknotes,
  },
  {
    point: 'No monthly fees',
    details:
      'Bank with us without worrying about monthly fees. Keep more of your money where it belongs—in your account',
    icon: ic_circle_stack,
  },
  {
    point: 'No bank transfer fees',
    details:
      'Seamlessly transfer funds without the extra cost. Send and receive money with zero bank transfer fees.',
    icon: ic_arrows_left_right,
  },
];
