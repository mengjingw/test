$(function(){
	leftTrees();
})
function leftTrees(){
		$("#tree_ul").tree({
			url:'../user/queryNav',
			lines:true,
			parentField:'pid',
			onClick:function(node){
				/*<![CDATA[*/
				if(undefined == node.children || node.children.length <= 0){
					var flag = $('#myTabs').tabs('exists',node.text);
					if(flag){
						$('#myTabs').tabs('select',node.text)
					}else{
						$('#myTabs').tabs('add',{
							title:node.text,
							content:createFrame(node.url),
							closable:true,
							tools:[
								{
									iconCls:'icon-mini-refresh',
									handler:function(){
										var selectTab = $('#myTabs').tabs('getSelected');
										$('#myTabs').tabs('update',{
											tab:selectTab,
											options:{
												content:createFrame(node.url)
											}
										});
									}
								}
							]
						})
					}
					/*]]>*/
				}
			}
		})
	}
function createFrame(url){  
	/*<![CDATA[*/return '<iframe border="0" scrolling="yes" frameborder="0"  src="..'+ url + '" style="width:99.9%;height:99.5%;"></iframe>';/*]]>*/  
}