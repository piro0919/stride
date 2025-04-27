import styles from "./style.module.css";

export default function ProductBacklogItemDetail(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <div>
        <h1>プロジェクトの一覧を見ることができる</h1>
        <dl>
          <dt>ペルソナ</dt>
          <dd>一般ユーザーとして、</dd>
          <dt>I want do</dt>
          <dd>プロジェクトの一覧を見たい。</dd>
          <dt>So that</dt>
          <dd>それは、チームメンバーの進捗を把握できるようにしたいからだ。</dd>
        </dl>
      </div>
      <aside></aside>
    </div>
  );
}
