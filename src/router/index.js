import Vue from 'vue'
import Router from 'vue-router'
/** 发现音乐 */
import NewShelves from '../components/DiscovrMusic/newShelves.vue'
import NewsRadio from '../components/DiscovrMusic/newsRadio.vue'
import RankingList from '../components/DiscovrMusic/rankingList.vue'
import Recommend from '../components/DiscovrMusic/recommend.vue'
import Singer from '../components/DiscovrMusic/singer.vue'
import SongList from '../components/DiscovrMusic/songList.vue'

/** 我的音乐 */
import CollectPlaylist from '../components/MyMusic/collectPlaylist.vue'
import CreatedPlaylist from '../components/MyMusic/createdPlaylist.vue'

/** 个人中心 */
import MyHomepage from '../components/Personal/myHomepage.vue'
import MySetting from '../components/Personal/mySetting.vue'

/** 朋友 */
import Friend from '../components/friend.vue'

/** 歌单、歌手、用户详情 */
import SongListDetails from '../components/DiscovrMusic/songListDetails.vue'
import SingerDetails from '../components/DiscovrMusic/singerDetails.vue'
import userDetails from '../components/DiscovrMusic/userDetails.vue'

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
            path: '/discovrMusic/newShelves',
            name: '新碟上架',
            component: NewShelves
        },
        {
            path: '/discovrMusic/newsRadio',
            name: '主播电台',
            component: NewsRadio
        },
        {
            path: '/discovrMusic/rankingList',
            name: '排行榜',
            component: RankingList
        },
        {
            path: '/discovrMusic/recommend',
            name: '推荐',
            component: Recommend
        },
        {
            path: '/discovrMusic/singer',
            name: '歌手',
            component: Singer
        },
        {
            path: '/discovrMusic/songList',
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
            path: '/discoverMusic/list/details',
            name: '歌单详情',
            component: SongListDetails
        },
        {
            path: '/discoverMusic/singer/details',
            name: '歌手详情',
            component: SingerDetails
        },
        {
            path: '/discoverMusic/userDetails',
            name: '用户详情',
            component: userDetails
        }
    ]
})