// ボタンにクリックアニメーションを追加
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
    }, 100);
  });
});
