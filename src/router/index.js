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
import userUpdate from '../components/Personal/userUpdate.vue'
import userSetting from '../components/Personal/userSetting.vue'

/** 朋友 */
import Friend from '../components/friend.vue'

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
            component: MySetting,
            children:[
                {
                    path: '/personal/mySetting/userUpdate',
                    name: '基本设置',
                    component: userUpdate
                },
                {
                    path: '/personal/mySetting/userSetting',
                    name: '隐私设置',
                    component: userSetting
                },
            ]
        },
        {
            path: '/friend',
            name: '朋友',
            component: Friend
        },
    ]
})