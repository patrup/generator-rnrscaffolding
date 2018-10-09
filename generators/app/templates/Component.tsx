import * as React from "react";
import styles from './<%= component %>.module.scss';
import { I<%= component %>Props, I<%= component %>State } from "./I<%= component %>";

export default class <%= component %> extends React.Component<I<%= component %>Props, I<%= component %>State> {

  public render(): JSX.Element {
    return (
      <div>
      </div>
    );
  }
}