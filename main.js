// タスクのIDと内容を管理するための配列
let tasks = [];

// 追加ボタンが押されたときのイベントリスナー
document.getElementById('addButton').addEventListener('click', () => {
  const taskName = document.getElementById('addTask').value; // 追加するタスクの名前を取得

  // tasks配列に新たなタスクを追加
  tasks.push({
    id: tasks.length, // 現在のtasks配列の長さをIDとする（0からスタート）
    name: taskName, // タスクの名前
    state: '作業中' // 初期状態は"作業中"
  });

  document.getElementById('addTask').value = ''; // 入力欄を空にする

  displayTasks(); // タスク一覧を表示更新
});

// タスク一覧を表示する関数
function displayTasks() {
  const tbody = document.querySelector('#todoTable tbody');
  tbody.innerHTML = ''; // tbodyの中身を空にする（初期化）

  tasks.forEach((task, index) => {
    const row = tbody.insertRow(-1); // 新しい行を最後に追加
    row.insertCell(-1).innerText = index; // "ID"列
    row.insertCell(-1).innerText = task.name; // "コメント"列
    const stateCell = row.insertCell(-1); // "状態"列

    // 状態ボタンの作成
    const stateButton = document.createElement('button');
    stateButton.innerText = task.state;
    stateCell.appendChild(stateButton);
  });
}
