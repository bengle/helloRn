import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Button, Title, Left, Body, Right } from 'native-base';
import { get } from '../../utils/http';
const moment = require('moment');
import { getArticalList } from '../../actions/list';

const mapStateToProps = state => ({
    ListState: state.ListState
})
const mapDispatchToProps = dispatch => ({
    getArticalList(params) {
        dispatch(getArticalList(params))
    }
})

class ArticalList extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        articals: [],
        res: null
    }
    componentDidMount() {
        // this.updateArticals();
        this.props.getArticalList();
    }
    updateArticals() {
        get('https://cnodejs.org/api/v1//topics', {
            page: 0,
            tab: 'share',
            limit: 10,
            mdrender: false
        })
            .then(res => {
                // debugger;
                if (res.data.success) {
                    this.setState({
                        articals: res.data.data
                    });
                }
            })
    }
    handleListItemClick(id) {
        this.props.history.push(`/topic/${id}`);
    }
    render() {
        const { articals } = this.state;
        const { list } = this.props.ListState;
        console.log(this.props);
        return (
            <Container style={styles.container}>
                <Header>
                    <Left />
                    <Body>
                        <Title>文章列表</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List>
                        {/* {
                            articals.map((item, index) => {
                                return (
                                    <ListItem thumbnail key={index} onPress={this.handleListItemClick.bind(this, item.id)}>
                                        <Left>
                                            <Thumbnail circle source={{ uri: item.author.avatar_url }} />
                                        </Left>
                                        <Body>
                                            <Text style={styles.title}>{item.title}</Text>
                                            <Text style={styles.author}>{moment(item.create_at).format('YYYY-MM-DD hh:mm:ss')}</Text>
                                        </Body>
                                        <Right>
                                            <Button transparent>
                                                <Text>View</Text>
                                            </Button>
                                        </Right>
                                    </ListItem>
                                )
                            })
                        } */}
                        {
                            list.map((item, index) => {
                                return (
                                    <ListItem thumbnail key={index} onPress={this.handleListItemClick.bind(this, item.id)}>
                                        <Left>
                                            <Thumbnail circle source={{ uri: item.author.avatar_url }} />
                                        </Left>
                                        <Body>
                                            <Text style={styles.title}>{item.title}</Text>
                                            <Text style={styles.author}>{moment(item.create_at).format('YYYY-MM-DD hh:mm:ss')}</Text>
                                        </Body>
                                        <Right>
                                            <Button transparent>
                                                <Text>View</Text>
                                            </Button>
                                        </Right>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        color: '#333333'
    },
    author: {
        fontSize: 12,
        color: '#ccc',
        marginTop: 10
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticalList)