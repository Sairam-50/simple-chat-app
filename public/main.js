$(document).ready(() => {
    const socket = io();
  
    $('form').submit(() => {
      const input = $('#input').val();
      socket.emit('chat message', input);
      $('#input').val('');
      return false;
    });
  
    socket.on('chat message', (msg) => {
      $('#messages').append($('<li>').text(msg));
    });
  
    $('#input').on('input', () => {
      const inputText = $('#input').val();
      const emojiSuggestions = {
        'happy': '😄',
        'sad': '😢',
        'love': '❤️',
        'cool': '😎',
        'angry': '😡',
        'laugh': '😂',
        'heart': '💖',
        'thumbs up': '👍',
        'thumbs down': '👎',
        'pizza': '🍕',
        'coffee': '☕️',
        'rainbow': '🌈',
        'github': '🐙',
  'code': '💻',
  'bug': '🐛',
  'stack overflow': '🔥',
  'slack': '📢',
  'facebook': '👤',
  'twitter': '🐦',
  'linkedin': '👔',
  'html': '📄',
  'css': '🎨',
  'javascript': '🚀',
  'python': '🐍',
  'java': '☕️',
  'ruby': '💎',
  'php': '🐘',
  'node.js': '🌳',
  'react': '⚛️',
  'angular': '🅰️',
  'vue.js': '🖖',
  'typescript': '🔷',
        // Add more keyword-emoji mappings here
      };
  
      let formattedText = inputText;
      for (const keyword in emojiSuggestions) {
        if (inputText.includes(keyword)) {
          formattedText = formattedText.replace(keyword, emojiSuggestions[keyword]);
        }
      }
  
      $('#input').val(formattedText);
    });
  });
  