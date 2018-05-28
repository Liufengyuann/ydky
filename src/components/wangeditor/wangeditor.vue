<template>
<div class="editor-wrapper">
	<div ref="editor" style="height:120px;border: 1px solid #000;"></div>
						<div ref="editoricon" style=""></div>
						<!-- <button @click="getContent">查看内容</button> -->
						<button style="position: absolute;top:123px;border:0 solid #000;border-radius:4px;text-align:center;color:#fff;background-color:#000;right: 0;font-size:10px;width:60px;height:18px">发表评论</button>
</div>	
</template>
<script type="text/javascript">
	import E from 'wangeditor'
	export default{
	   data () {
			return {
				editorContent: ''
			}
		},
		mounted () {
			var editor = new E(this.$refs.editoricon,this.$refs.editor)
			editor.customConfig.menus = [
			  'emoticon'
			]
			editor.customConfig.onchange = (html)=> {
				this.editorContent = html
			}
			editor.create()
		},
		methods: {
			getContent: function() {
				alert(this.editorContent)
			}
		}
	}
</script>
<style type="text/css" scoped="">
		
</style>
