import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

class TextInputBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { placeholder, value, onChange, onFocus } = this.props;

    return (
      <TextInput
        mode={"outlined"}
        placeholder={placeholder ? placeholder : ""}
        value={value}
        onChangeText={(text) => onChange(text)}
        onFocus={onFocus}
        style={styles.textInput}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 45,
  },
});

export default TextInputBox;
