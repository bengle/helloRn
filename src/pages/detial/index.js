import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { Container, Header, Content, Title, Left, Body, Right, Text, Button, Icon } from 'native-base';
import { get } from '../../utils/http';

export default class DetailPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        topic: {}
    }
    componentDidMount() {
        let topicId = this.props.match.params.id;
        get(`https://cnodejs.org/api/v1/topic/${topicId}`)
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        topic: res.data.data
                    })
                }
            })
    }
    handleBackClick() {
        this.props.history.push('/');
    }
    render() {
        const { topic } = this.state;
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={this.handleBackClick.bind(this)}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>详情</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text style={styles.title}>{topic.title}</Text>
                    <HTMLView value={topic.content} />
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
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
    }
});