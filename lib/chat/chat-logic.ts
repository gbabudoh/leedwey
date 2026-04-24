export type MessageType = 'text' | 'button' | 'carousel' | 'image';

export interface ChatAction {
  label: string;
  payload: string;
  type: 'postback' | 'url';
}

export interface Message {
  id: string;
  type: MessageType;
  content: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  actions?: ChatAction[];
  data?: any;
}

export const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    type: 'text',
    content: "Hi there! I'm Leadway AI, your personal trade assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date(),
    actions: [
      { label: '📦 Track My Escrow', payload: 'escrow_status', type: 'postback' },
      { label: '🛡️ Start Verification', payload: 'start_verification', type: 'postback' },
      { label: '🎥 Book Factory Tour', payload: 'book_tour', type: 'postback' },
      { label: '❓ General Help', payload: 'general_help', type: 'postback' }
    ]
  }
];

export function getBotResponse(payload: string): Message {
  switch (payload) {
    case 'escrow_status':
      return {
        id: Math.random().toString(),
        type: 'text',
        content: "Our Secure Escrow system ensures your funds are only released upon milestone completion. Would you like to see your active milestones?",
        sender: 'bot',
        timestamp: new Date(),
        actions: [
          { label: '✅ View Milestones', payload: '/dashboard/escrow', type: 'url' },
          { label: '📖 How it works', payload: 'escrow_info', type: 'postback' }
        ]
      };
    case 'start_verification':
      return {
        id: Math.random().toString(),
        type: 'text',
        content: "To join our Closed B2B network, manufacturers must pass a physical audit. I can help you start the process or schedule an inspector visit.",
        sender: 'bot',
        timestamp: new Date(),
        actions: [
          { label: '📝 Fill Audit Form', payload: '/dashboard/verification/apply', type: 'url' },
          { label: '👨‍💼 Speak to Agent', payload: 'speak_agent', type: 'postback' }
        ]
      };
    case 'book_tour':
      return {
        id: Math.random().toString(),
        type: 'text',
        content: "Live factory tours provide absolute transparency. Which manufacturing sector are you interested in?",
        sender: 'bot',
        timestamp: new Date(),
        actions: [
          { label: '⚙️ Industrial Parts', payload: 'tour_industrial', type: 'postback' },
          { label: '👗 Textiles & Apparel', payload: 'tour_textiles', type: 'postback' },
          { label: '📱 Electronics', payload: 'tour_electronics', type: 'postback' }
        ]
      };
    case 'escrow_info':
      return {
        id: Math.random().toString(),
        type: 'text',
        content: "Leedwey Escrow works in 3 steps:\n1. Deposit funds to secure the order.\n2. Manufacturer hits production milestones.\n3. Funds released upon your approval or independent inspection.",
        sender: 'bot',
        timestamp: new Date()
      };
    default:
      return {
        id: Math.random().toString(),
        type: 'text',
        content: "I'm not quite sure about that. Let me connect you with a human expert, or try one of the options below.",
        sender: 'bot',
        timestamp: new Date(),
        actions: INITIAL_MESSAGES[0].actions
      };
  }
}
