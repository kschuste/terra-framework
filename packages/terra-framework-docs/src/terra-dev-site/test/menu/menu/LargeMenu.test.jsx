import React from 'react';
import Menu from 'terra-menu';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';

class LargeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false };
  }

  componentDidMount() {
    this.forceUpdate();
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  render() {
    return (
      <div>
        <div>
          This menu should have a large height. And all items should be visible without scrolling.
        </div>
        <Menu
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <Menu.Item text="Default 1" key="1" className="TestFirstItem" />
          <Menu.Item
            text="Nested Menu"
            key="2"
            subMenuItems={[
              <Menu.Item text="Default 2.1" key="2.1" />,
              <Menu.Item text="Default 2.2" key="2.2" />,
              <Menu.Item text="Default 2.3" key="2.3" />,
              <Menu.Item text="Default 2.4" key="2.4" icon={<IconPrinter />} />,
            ]}
          />
          <Menu.Item text="Default 3" key="3" />
          <Menu.Item text="Default 4" key="4" />
          <Menu.Item text="Default 5" key="5" />
          <Menu.Divider key="Divider1" />
          <Menu.ItemGroup key="6">
            <Menu.Item text="Default 61" key="61" />
            <Menu.Item text="Default 62" key="62" />
            <Menu.Item text="Default 63" key="63" />
          </Menu.ItemGroup>
          <Menu.Divider key="Divider2" />
          <Menu.Item text="Default 7" key="7" />
          <Menu.Item text="Default 8" key="8" />
          <Menu.Item text="Default 9" key="9" />
          <Menu.Divider key="Divider1" />
          <Menu.Item text="Default 10" key="10" />
          <Menu.Item text="Default 11" key="11" />
          <Menu.Item text="Default 12" key="12" />
          <Menu.Item text="Default 13" key="13" />
          <Menu.Item text="Default 14" key="14" />
          <Menu.Divider key="Divider3" />
          <Menu.ItemGroup key="15">
            <Menu.Item text="Default 151" key="151" />
            <Menu.Item text="Default 152" key="152" />
            <Menu.Item text="Default 153" key="153" />
          </Menu.ItemGroup>
          <Menu.Divider key="Divider4" />
          <Menu.Item text="Default 16" key="16" className="TestLastItem" />
        </Menu>
        <button type="button" id="large-menu-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Default Menu
        </button>
      </div>
    );
  }
}

export default LargeMenu;
