"use client";
import React from "react";
import { useCollapse } from "react-collapsed";
import MarkdownEditor from "../MarkdownEditor";
import SelectSearch from "../SelectSearch/";
import styles from "./style.module.css";

export default function NewProductBacklogItemForm(): React.JSX.Element {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const {
    getCollapseProps: getCollapseProps2,
    getToggleProps: getToggleProps2,
    isExpanded: isExpanded2,
  } = useCollapse();

  return (
    <form className={styles.form}>
      <div className={styles.inner}>
        <div className={styles.fieldsContainer}>
          <div className={styles.field}>
            <label className={styles.label}>
              <span>タイトル</span>
              <span className={styles.required}>*</span>
            </label>
            <input className={styles.input} />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>
              <span>ユーザーストーリー</span>
            </label>
            <MarkdownEditor />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>
              <span>説明</span>
            </label>
            <MarkdownEditor />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>
              <span>受け入れ条件</span>
            </label>
            <MarkdownEditor />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>
              <span>関連リンク</span>
            </label>
            <input className={styles.input} />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>
              <span>関連プロダクトバックログアイテム</span>
            </label>
            <SelectSearch options={[]} />
          </div>
          <section {...getCollapseProps()}>
            <div className={styles.fieldsContainer}>
              <div className={styles.field}>
                <label className={styles.label}>
                  <span>作業タスク</span>
                </label>
                <SelectSearch options={[]} />
              </div>
            </div>
          </section>
          <button {...getToggleProps()} className={styles.optionButton}>
            {`オプションを${isExpanded ? "隠す" : "表示する"}`}
          </button>
        </div>
        <aside className={styles.fieldsContainer}>
          <div className={styles.field}>
            <label className={styles.label}>
              <span>エピック</span>
            </label>
            <SelectSearch
              options={[
                {
                  name: "認証",
                  value: "hoge",
                },
                {
                  name: "ダッシュボード",
                  value: "fuga",
                },
              ]}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>
              <span>優先度</span>
            </label>
            <SelectSearch
              options={[
                {
                  name: "超重要",
                  value: "mustHave",
                },
                {
                  name: "重要",
                  value: "shouldHave",
                },
                {
                  name: "ふつう",
                  value: "couldHave",
                },
                {
                  name: "あればうれしい",
                  value: "niceToHave",
                },
              ]}
            />
          </div>
          <section {...getCollapseProps2()}>
            <div className={styles.fieldsContainer}>
              <div className={styles.field}>
                <label className={styles.label}>
                  <span>ステータス</span>
                </label>
                <SelectSearch options={[]} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>
                  <span>スプリント</span>
                </label>
                <SelectSearch options={[]} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>
                  <span>スプリントレビュー担当</span>
                </label>
                <SelectSearch options={[]} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>
                  <span>見積もり</span>
                </label>
                <SelectSearch options={[]} />
              </div>
            </div>
          </section>
          <button {...getToggleProps2()} className={styles.optionButton}>
            {`オプションを${isExpanded2 ? "隠す" : "表示する"}`}
          </button>
        </aside>
      </div>
    </form>
  );
}
