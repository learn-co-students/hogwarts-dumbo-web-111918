import React from 'react'
import { Container, Input, Menu, Header, Radio } from 'semantic-ui-react'


class Nav extends React.Component {

  render() {
    return (
      <Container>
        <Header textAlign="center" as="h2">A React App for County Fair Hog Fans</Header>
        <Menu secondary>
          <Menu.Item name="Sort By:"/>
          <Menu.Item name="Name" active={this.props.sortedName} onClick={this.props.sortByName}/>
          <Menu.Item name="Weight" active={this.props.sortedWeight} onClick={this.props.sortByWeight}/>
          <Menu.Item>
            <Radio toggle label={this.props.toggled ? "Greased" : "Greased hogs?"} onChange={this.props.func}/>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' value={this.props.value} placeholder='Search...' onChange={this.props.search}/>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    )
  }
}

export default Nav