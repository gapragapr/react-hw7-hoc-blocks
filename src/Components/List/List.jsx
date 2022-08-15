import React from 'react'
import Video from '../Video/Video'
import Article from '../Article/Article'
import ArticleHoc from '../../HOC/ArticleHoc';
import VideoHoc from '../../HOC/VideoHoc'

const NewArticle = ArticleHoc(Article)
const NewVideo = VideoHoc(Video)

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <NewVideo {...item} />
                );

            case 'article':
                return (
                    <NewArticle {...item} />
                );
        }
    });
};