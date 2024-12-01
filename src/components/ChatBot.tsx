import React from 'react';
import { BubbleChat } from 'flowise-embed-react';

export function ChatBot() {
  return (
    <BubbleChat
      chatflowid="f4f76ef2-1823-4948-9ca3-b14e0fc943e1"
      apiHost="https://ait5rc29.rpcld.app"
      theme={{    
        button: {
          backgroundColor: '#4F46E5',
          right: 20,
          bottom: 20,
          size: 48,
          dragAndDrop: true,
          iconColor: 'white',
          customIconSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
          autoWindowOpen: {
            autoOpen: false,
            openDelay: 2,
            autoOpenOnMobile: false
          }
        },
        tooltip: {
          showTooltip: true,
          tooltipMessage: 'Need help with JavaScript? Ask me! 👋',
          tooltipBackgroundColor: '#4F46E5',
          tooltipTextColor: 'white',
          tooltipFontSize: 14
        },
        chatWindow: {
          showTitle: true,
          showAgentMessages: true,
          title: 'JavaScript Assistant',
          titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
          welcomeMessage: 'Hi! I\'m your JavaScript learning assistant. Feel free to ask me any questions about JavaScript concepts, debugging help, or project guidance!',
          backgroundColor: '#ffffff',
          height: 600,
          width: 400,
          fontSize: 16,
          starterPrompts: [
            "How do I use async/await?",
            "Explain closures in JavaScript",
            "Help with DOM manipulation",
            "JavaScript best practices"
          ],
          botMessage: {
            backgroundColor: '#F3F4F6',
            textColor: '#1F2937',
            showAvatar: true,
            avatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg'
          },
          userMessage: {
            backgroundColor: '#4F46E5',
            textColor: '#ffffff',
            showAvatar: true,
            avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
          },
          textInput: {
            placeholder: 'Ask anything about JavaScript...',
            backgroundColor: '#ffffff',
            textColor: '#1F2937',
            sendButtonColor: '#4F46E5',
            sendMessageSound: true
          }
        }
      }}
    />
  );
}