import React, { useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../assets/themes';
import CustomButton from '../../shared/customButton';
import Hotbar from '../../components/hotbar/Hotbar';
import { globalStyles } from '../../assets/globalStyles';
import { useTheme } from '../../assets/ThemeContext';
import Post from '../../components/post/post';
import { PostProps  } from '../../shared/postProps';
import { FormatNumbers } from '../../shared/formatNumbers';

const postsList: PostProps[] = [
    { 
        postOwnership: 'wd32dw-ew1-213as-4az',
        postId: 'bvbd-sdasd-54asd',
        postDescription: 'This is my post',
        userLiked: true,
        postLikes: FormatNumbers(312),
        postOverpost: FormatNumbers(421412),
        postComments: FormatNumbers(534),
    },
    { 
        postOwnership: 'wd32dw-ew1-213as-4az',
        postId: 'cvbc-sdasd-54asd',
        postDescription: 'Another Post',
        userLiked: false,
        postLikes: FormatNumbers(12),
        postOverpost: FormatNumbers(32541),
        postComments: FormatNumbers(51512),
    }
]

const postsList2: PostProps[] = [
    { 
        postOwnership: 'wd32dw-ew1-213as-4az',
        postId: 'zxc-sdasd-54asd',
        postDescription: 'LEEEPO',
        userLiked: true,
        postLikes: FormatNumbers(123463),
        postOverpost: FormatNumbers(4564),
        postComments: FormatNumbers(4353),
    },
    { 
        postOwnership: 'wd32dw-ew1-213as-4az',
        postId: 'xcxc-sdasd-54asd',
        postDescription: 'Creuza',
        userLiked: false,
        postLikes: FormatNumbers(743),
        postOverpost: FormatNumbers(3231),
        postComments: FormatNumbers(2354),
    }
]

const postsList3: PostProps[] = [
    { 
        postOwnership: 'wd32dw-ew1-213as-4az',
        postId: 'asdsa-sdasd-54asd',
        postDescription: 'ASDZXCZX',
        userLiked: false,
        postLikes: FormatNumbers(123),
        postOverpost: FormatNumbers(12333),
        postComments: FormatNumbers(53453),
    },
    { 
        postOwnership: 'wd32dw-ew1-213as-4az',
        postId: 'z233-sdasd-54asd',
        postDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eos sequi suscipit at voluptas corrupti quisquam culpa dolorem! Ad nam itaque repellendus odio, aliquam molestiae corrupti consequuntur est nihil id.',
        userLiked: false,
        postLikes: FormatNumbers(234),
        postOverpost: FormatNumbers(342),
        postComments: FormatNumbers(987),
    }
]

function Home({ navigation }: any) {
    const { activeColors, toggleTheme } = useTheme(); // Consumo do contexto
    const [refreshing, setRefreshing] = useState(false);
    const [posts, setPosts] = useState(postsList); // Usar useState para posts

    const handleRefresh = () => { 
        setPosts(posts === postsList2 ? postsList3 :  postsList2); // Atualizar posts de forma imutável
        console.log('Refreshing...');
    }

    const getPosts = () => { 
        console.log('Getting Posts...');
    }

    return (
        <View style={globalStyles(activeColors).Background}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
                {posts.map((post) => (
                    <Post 
                    key={post.postId}  // Chave para cada item da lista
                    postOwnership={post.postOwnership} 
                    postId={post.postId} 
                    postDescription={post.postDescription ?? undefined} 
                    postImage={post.postImage ?? undefined} 
                    userLiked={post.userLiked} 
                    postLikes={post.postLikes} 
                    postOverpost={post.postOverpost} 
                    postComments={post.postComments}
                />
                ))}
            </ScrollView>
            <Hotbar />
        </View>
    );
}

const styles = (activeColors: {
    text: string;
    background: string;
    backgroundAccent: string;
    primary: string;
    secondary: string;
    accent: string;
    disabledIcon: string;
}) =>
    StyleSheet.create({
        switchThemeButton: {
            width: 50, 
            backgroundColor: activeColors.primary,
            borderRadius: 10,
        },
        generalText: {
            color: activeColors.text,
        }
    });

export default Home;
