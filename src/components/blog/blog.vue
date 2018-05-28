<template>
	<div class="blogWrapper">
		<div class="container">
			<div class="bannerWrapper">
			<img src="./01.jpg">
			<img src="./01.jpg">
			<img src="./01.jpg">
		</div>
		<div class="blogTabWrapper">
			 <el-tabs tab-position="left" >
              <el-tab-pane>
                <span slot="label">
                	<i class="el-icon-date"></i>全部
                </span>
                <div class="tab_content">
                   <el-tabs v-model="activeName" @tab-click="handleClick">
                      <el-tab-pane label="用户管理" name="first">
                        <li v-for = "list in blogList" class="listWrapper" @click = turnTopage(list.id)>
                          <div class="avatarWrapper">
                              <img src="./01.jpg">
                              <span>{{list.nickname}}</span>
                         </div>
                         <div class="listContent">
                            <p class="list_title">
                              {{list.title}}
                            <span ><i></i></span>
                            </p>
                            <p class="list_text">
                              {{list.content}}
                            </p>
                            <div class="list_remark">
                               <span>发布于 {{list.created_at}} 小时前</span>
                               <span>阅读 {{list.view}}</span>
                               <span>讨论 {{list.discuss}}</span>
                            </div>
                         </div>
                       </li>
                       
                      </el-tab-pane>
                      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                   </el-tabs>
                  </div>
              </el-tab-pane>
              <el-tab-pane>
                <span slot="label">
                	<i class="el-icon-date"></i>移动开发
                </span>
                <div class="tab_content">
                	 <el-tabs v-model="activeName" @tab-click="handleClick">
                      <el-tab-pane label="用户管理" name="first">管理</el-tab-pane>
                      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                   </el-tabs>
                </div>
              </el-tab-pane>
              <el-tab-pane>
                <span slot="label">
                	<i class="el-icon-date"></i>前端开发
                </span>
                <div class="tab_content">
                	tabcontent
                </div>
              </el-tab-pane>
               <el-tab-pane>
                <span slot="label">
                	<i class="el-icon-date"></i>人工智能
                </span>
                <div class="tab_content">
                	tabcontent
                </div>
              </el-tab-pane>
               <el-tab-pane>
                <span slot="label">
                	<i class="el-icon-date"></i>服务器开发/管理
                </span>
                <div class="tab_content">
                	tabcontent
                </div>
              </el-tab-pane>
               <el-tab-pane>
                <span slot="label">
                	<i class="el-icon-date"></i>游戏开发
                </span>
                <div class="tab_content">
                	tabcontent
                </div>
              </el-tab-pane>
               <el-tab-pane>
                <span slot="label">
                	<i class="el-icon-date"></i>编程语言
                </span>
                <div class="tab_content">
                	tabcontent
                </div>
              </el-tab-pane>
               <el-tab-pane>
                <span slot="label">
                	<i class="el-icon-date"></i>数据库
                </span>
                <div class="tab_content">
                	tabcontent
                </div>
              </el-tab-pane>
               <el-tab-pane>
                <span slot="label">
                	<i class="el-icon-date"></i>企业开发
                </span>
                <div class="tab_content">
                	tabcontent
                </div>
              </el-tab-pane>
               <el-tab-pane>
                <span slot="label">
                	<i class="el-icon-date"></i>图像/多媒体
                </span>
                <div class="tab_content">
                	tabcontent
                </div>
              </el-tab-pane>
               <el-tab-pane>
                <span slot="label">
                	<i class="el-icon-date"></i>系统运维
                </span>
                <div class="tab_content">
                	tabcontent
                </div>
              </el-tab-pane>
               <el-tab-pane>
                <span slot="label">
                	<i class="el-icon-date"></i>软件工程
                </span>
                <div class="tab_content">
                	tabcontent
                </div>
              </el-tab-pane>
               <el-tab-pane>
                <span slot="label">
                	<i class="el-icon-date"></i>大数据
                </span>
                <div class="tab_content">
                	tabcontent
                </div>
              </el-tab-pane>
               <el-tab-pane>
                <span slot="label">
                	<i class="el-icon-date"></i>云计算
                </span>
                <div class="tab_content">
                	tabcontent
                </div>
              </el-tab-pane>
               <el-tab-pane>
                <span slot="label">
                	<i class="el-icon-date"></i>开源项目
                </span>
                <div class="tab_content">
                	tabcontent
                </div>
              </el-tab-pane>
               <el-tab-pane>
                <span slot="label">
                	<i class="el-icon-date"></i>其他分类
                </span>
                <div class="tab_content">
                	tabcontent
                </div>
              </el-tab-pane>
             </el-tabs>
		</div>
    <el-pagination class="pagination"  small  layout="prev, pager, next, jumper"  @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
       :total="20" ></el-pagination>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
          activeName: 'second',
          blogList:[
          {
              title: "title1",
             "touxiang": "",
             "id":1,
             "nickname":"王瑶1",
             "type": 1,
             "content": "同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行",
             "created_at": 10,
             "view": 123,
             "discuss": 122,
             "fansy": 2
          },
          {
              title: "title1",
             "touxiang": "",
             "nickname":"王瑶1",
             "type": 1,
             "id":2,
             "content": "同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行",
             "created_at": 10,
             "view": 123,
             "discuss": 122,
             "fansy": 2
          },
          {
              title: "title1",
             "touxiang": "",
             "nickname":"王瑶1",
             "type": 1,
             "id":3,
             "content": "同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行",
             "created_at": 10,
             "view": 123,
             "discuss": 122,
             "fansy": 2
          },
          {
              title: "title1",
             "touxiang": "",
             "nickname":"王瑶1",
             "type": 1,
             "content": "同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行",
             "created_at": 10,
             "view": 123,
             "discuss": 122,
             "fansy": 2
          },
          {
              title: "title1",
             "touxiang": "",
             "nickname":"王瑶1",
             "type": 1,
             "content": "同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行",
             "created_at": 10,
             "view": 123,
             "discuss": 122,
             "fansy": 2
          },
          {
              title: "title1",
             "touxiang": "",
             "nickname":"王瑶1",
             "type": 1,
             "content": "同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行",
             "created_at": 10,
             "view": 123,
             "discuss": 122,
             "fansy": 2
          },
          {
              title: "title1",
             "touxiang": "",
             "nickname":"王瑶1",
             "type": 1,
             "content": "同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行",
             "created_at": 10,
             "view": 123,
             "discuss": 122,
             "fansy": 2
          },
          {
              title: "title1",
             "touxiang": "",
             "nickname":"王瑶1",
             "type": 1,
             "content": "同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行同步基于顺序执行",
             "created_at": 10,
             "view": 123,
             "discuss": 122,
             "fansy": 2
          }]
			}
		},
    computed: {
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      },
      turnTopage(id){
        this.$router.push({ name: 'blogSecond', params: { listId: id }})
        console.log(this.$route.path)
      },
       handleClick(tab, event) {
        console.log(tab, event)
      }
    }
	}
</script>
<style type="text/css" scoped>
	.blogWrapper{
		width: 100%;
		background-color: #fff;
    color: #000;
    padding-bottom: 10px; 
	}
  .bannerWrapper{
    width: 100%;
    height: 213px;
    font-size: 0;
    overflow: hidden;
    display: flex;
  }
  .bannerWrapper img{
    width: 30%;
    height: 100%;
    flex: 1;
  }
	.blogTabWrapper{
		padding-top: 20px;
		padding-bottom: 20px;
	}
  .listWrapper{
    width: 100%;
    padding: 20px 40px 20px 40px;
    display: flex;
    box-sizing: border-box;
  }
  .avatarWrapper {
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-right: 18px;
  }
  .avatarWrapper img{
    width: 70px;
    height: 70px;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    display: block;
    justify-content: space-between;
  }
  .avatarWrapper span{
    font-size: 18px;
    text-align: center;
    display: block;
    margin-top: 10px;
  }
  .listContent{
  }
  .listContent .list_title{
    font-size: 22px;
    margin-bottom: 10px;
  }
  .list_text{
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 25px;
  }
  .list_remark span{
    margin-right: 20px;
  }
  .pagination{
    text-align: center;
    margin-bottom: 10px;
  }
</style>