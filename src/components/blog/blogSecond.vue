<template>
	<div class="blogSecond">
		<div class="container">
			<div class="intro">
				<div class="section-content">
					<span>博客 > usernick 的博客 > 博客详情</span>
				<p class="article-title">
					总结几个关于jq的用法
					<span>推荐</span>
					<span>棒棒</span>
				</p>
				<span>{usernick} 发布于 3小时前 评论 122条 阅读 3条 点赞 10条</span>
				<p class="collect">
					<span></span> 收藏
				</p>
				</div>
			</div>
			<div class="article-content">
				<div class="section-content">
					<p>
					有关JA的用法
					啦啦啦
					耶耶耶
					呀
					哼
					哈哈哈
					黑
				</p>
				</div>
			</div>
			<div class="article-evalu">
				<div class="article-span">
					<i> 点赞 </i>
					<span> 点赞</span>
				</div>
				<div class="article-span">
					<i> 打赏 </i>
					<span> 打赏</span>
				</div>
				<div class="article-span">
					<i> 收藏 </i>
					<span> 收藏</span>
				</div>
				<div class="article-span">
					<i> 分享 </i>
					<span> 分享</span>
				</div>
			</div>
			<div class="interval"></div>
			<div class="article-commit">
				<div class="section-content">
					<span>评论 (7)</span>
					<div class="editorWrapper">
						<wangeditor ></wangeditor>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import wangeditor from '../wangeditor/wangeditor.vue'
	export default{
		components:{
			wangeditor: wangeditor
		},
		data() {
			return {

			}
		}
	}
</script>
<style type="text/css" scoped>
   .article-commit{
   	padding-top: 10px;
   }
   .blogSecond{
   	width : 100%;
   	background-color : #f2f2f4;
   	color : #000;
   	overflow : hidden;
   }
   .interval{
   	width: 100%;
   	height: 10px;
   	background-color: #f2f2f4;
   }   
   .container{
   	padding: 0 20px;
   	box-sizing: border-box;
   	background-color: #f6f8f7;
   }
   .intro{
   	padding-top: 24px;
   	line-height: 80px;
   	width: 100%;
   	margin-bottom: 28px;
   	border-bottom: 2px solid #000;
   }
   .section-content{
   	width: 80%;
   	margin: 0 auto;
   }
   .collect{
   	display: inline-block;
   	margin-left: 30px;
   }
   .article-title{
   	font-size:28px;
   }
   .article-title span{
   	display: inline-block;
   	margin: 0 0 0 10px;
   	width: 36px;
   	background-color: #000;
   	color: #fff;
   	line-height: 18px;
   	border-radius: 4px;
   	text-align:center;
   	font-size1: 12px;
   }
   .article-content{
   	padding: 30px 0;
   	border-bottom: 2px solid #000;
   	width: 100%;
   }
   .article-content p{
   	width: 90%;
   	margin: 0 auto;
   }
   .article-evalu{
   	width: 60%;
   	margin: 0 auto;
   	display: flex;
   	padding: 20px 0;
   	justify-content: space-around;
   	flex-direction: row;
   }
   .article-span{
   	width: 20%;
   	text-align:center;
   }
   .editorWrapper{
   	position : relative;
   	margin-top: 20px;
   }
</style>