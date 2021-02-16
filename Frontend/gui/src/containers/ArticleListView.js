import React from 'react';
import Articles from '../components/Article'
import axios from 'axios';
import CustomForm from '../components/Form'

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

class ArticleList extends React.Component {
    state = {
        articles : []
    }

    componentDidMount() {
        axios.get("http://localhost:8000/api/")
        .then(res => {
            this.setState({
                articles : res.data
            })
            console.log(res.data);
        })

    }

    render() {
        return (
            <div>
                <Articles data={this.state.articles}/>
                <br/>
                <h2>Create an article</h2>
                <CustomForm
                    requestType="post" articleID={null}
                    btnText="Create"/>
            </div>
        )
    }
}

export default ArticleList; 