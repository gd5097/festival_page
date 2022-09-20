import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import moment from 'moment';
import 'moment/locale/ko';
import GroupBox from './group-box';
import PostButton from '../post-button';
import axios from 'axios';
import useAuth from '../../../hooks/use-auth';
import { useNavigate } from 'react-router-dom';

export default function Group() {
    const time = moment().format('DD/MM HH:MM');
    const auth = useAuth();
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://52.79.44.217/posts?categoryId=1',{
                headers: {
                    Authorization : auth.auth,
                }
            }
            ).then((response) => {                 
                setPosts(response.data.posts);
                
            }).catch((error) => {
                console.log('이상함');
            })
      }, []);
    

    return(
        <div css={css`
            display: flex;
            flex-direction: column;
            
            row-gap: 12px;

            margin: 0px 20px;
            border: 0;
            border-radius: 18px;
            //background-color: white;
        `}>
            {posts.map((post) => (
                <GroupBox
                onClick={() => {
                    console.log(post);
                    navigate(`/community/group-view/${post.id}`,
                        {state: post}
                    )
                }}
                key={`group-${post.id}`}
                postInfo={post}
            />
            ))}

            <PostButton size={56} link={'/community/festival-picture-view/group-write-view'}/>
        </div>
        
    );
}