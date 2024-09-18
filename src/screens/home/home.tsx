import React, { useState, useMemo, useRef } from 'react';
import { RefreshControl, ScrollView, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../../assets/globalStyles';
import { useTheme } from '../../assets/ThemeContext';
import Post from '../../components/post/post';
import { PostProps } from '../../shared/postProps';
import { FormatNumbers } from '../../shared/formatNumbers';
import CreatePostModal from '../../shared/customPostomModal/createPostModal';
import Hotbar from '../../components/hotbar/Hotbar';
import { createStyles } from './assets/style'; // Importação do estilo

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
];

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
];

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
];

function Home({ navigation }: any) {
    const { activeColors } = useTheme(); 
    const [refreshing, setRefreshing] = useState(false);
    const [posts, setPosts] = useState(postsList);
    const styles = useMemo(() => createStyles(activeColors), [activeColors]);
    const postBttmSheetRef = useRef<BottomSheet | null>(null);
    const snapPoints = useMemo(() => ['50%', '50%'], []);
    const [openPost, setOpenPost] = useState(false);

    const handleOpenPost = () => {
        if (postBttmSheetRef.current) {
            postBttmSheetRef.current.expand();
            setOpenPost(true);
        }
    };

    const handleClosePost = () => {
        if (postBttmSheetRef.current) {
            postBttmSheetRef.current.close();
            setOpenPost(false);
            setTimeout(() => {
                Keyboard.dismiss();
              }, 300);
        }
    };

    const handleRefresh = () => { 
        setPosts(posts === postsList2 ? postsList3 : postsList2);
        console.log('Refreshing...');
    };

    return (
        
        <View style={globalStyles(activeColors).Background}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
                {posts.map((post) => (
                    <Post 
                        key={post.postId}
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
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <CreatePostModal title='Create Post' ref={postBttmSheetRef} snapPoints={snapPoints} handleClosePost={handleClosePost} />
            </TouchableWithoutFeedback>
            <Hotbar handleOpenPost={openPost ? handleClosePost : handleOpenPost} />
        </View>
    );
}

export default Home;
