import Vue from 'vue'
import Router from 'vue-router'
/** 发现音乐 */
import NewShelves from '../components/DiscovryMusic/newShelves.vue'
import NewsRadio from '../components/DiscovryMusic/newsRadio.vue'
import RankingList from '../components/DiscovryMusic/rankingList.vue'
import Recommend from '../components/DiscovryMusic/recommend.vue'
import Singer from '../components/DiscovryMusic/singer.vue'
import SongList from '../components/DiscovryMusic/songList.vue'

/** 我的音乐 */
import CollectPlaylist from '../components/MyMusic/collectPlaylist.vue'
import CreatedPlaylist from '../components/MyMusic/createdPlaylist.vue'

/** 个人中心 */
import MyHomepage from '../components/Personal/myHomepage.vue'
import MySetting from '../components/Personal/mySetting.vue'

/** 朋友 */
import Friend from '../components/friend.vue'

/** 歌单、歌手、用户、音乐详情、排行详情、歌手列表 */
import SongListDetails from '../components/DiscovryMusic/songListDetails.vue'
import SingerDetails from '../components/DiscovryMusic/singerDetails.vue'
import userDetails from '../components/DiscovryMusic/userDetails.vue'
import Music from '../components/DiscovryMusic/music.vue'
import RankingDetails from '../components/ChildComponents/rankingDetails.vue'
import singerArtistlist from '../components/ChildComponents/singerArtistlist.vue'

//解决连续点击多次路由报错（必须加在use前）
// eslint-disable-next-line no-irregular-whitespace
const originalPush =Router.prototype.push
// eslint-disable-next-line no-irregular-whitespace
Router.prototype.push = function push (location) {
// eslint-disable-next-line no-irregular-whitespace
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

Vue.prototype.$goRoute = function(path){
    this.$router.push(path)
}

export default new Router({
    routes: [
        {
            path: '/discovryMusic/newShelves',
            name: '新碟上架',
            component: NewShelves
        },
        {
            path: '/discovryMusic/newsRadio',
            name: '主播电台',
            component: NewsRadio
        },
        {
            path: '/discovryMusic/rankingList',
            name: '排行榜',
            component: RankingList,
            children:[
                {
                    path: '/discoveryMusic/ranking/details',
                    name: '排行详情',
                    component: RankingDetails
                }
            ]
        },
        {
            path: '/discovryMusic/recommend',
            name: '推荐',
            component: Recommend
        },
        {
            path: '/discovryMusic/singer',
            name: '歌手',
            component: Singer,
            children:[
                {
                    path: '/discoveryMusic/singer/artistlist',
                    name: '歌手列表',
                    component: singerArtistlist
                }
            ]
        },
        {
            path: '/discovryMusic/songList',
            name: '歌单',
            component: SongList
        },
        {
            path: '/myMusic/collectPlaylist',
            name: '收藏的歌单',
            component: CollectPlaylist
        },
        {
            path: '/myMusic/createdPlaylist',
            name: '创建的歌单',
            component: CreatedPlaylist
        },
        {
            path: '/personal/myHomepage',
            name: '我的主页',
            component: MyHomepage
        },
        {
            path: '/personal/mySetting',
            name: '个人设置',
            component: MySetting
        },
        {
            path: '/friend',
            name: '朋友',
            component: Friend
        },
        {
            path: '/discoveryMusic/list/details',
            name: '歌单详情',
            component: SongListDetails
        },
        {
            path: '/discoveryMusic/singer/details',
            name: '歌手详情',
            component: SingerDetails
        },
        {
            path: '/discoveryMusic/userDetails',
            name: '用户详情',
            component: userDetails
        },
        {
            path: '/music',
            name: '音乐详情',
            component: Music
        }
    ]
})