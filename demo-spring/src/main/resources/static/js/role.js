$(function(){
	queryListBook();	
})
function queryListBook(){
	$('#show_role_list_id').datagrid({    
	    url:'../user/queryRoleInfo',
	    pagination:true,
	    ctrlSelect:true,
	    pageNumber:1,
	    pageSize:3,
	    pageList:[3,6,9], 
	    columns:[[ 
			 {field:'ckid',checkbox:true},
	         {field:'id',title:'角色id',width:100},     
	        {field:'text',title:'角色名称',width:100},    
	        {field:'caozuo',title:'操作',width:100,align:'right',
	        	formatter: function(value,row,index){
	        		/*<![CDATA[*/return '<a href="javascript:openPowerDialog(\''+row.id+'\')">绑定权限</a>'/*]]>*/	 
	        	}		
	        	
	        }   
	    ]]
	});  
}
function openPowerDialog(roleid){
	$('#roleIdInput').val(roleid);
	initPowerTree(roleid);
	openDialog();
}
function initPowerTree(roleid) {
	$('#powerTree').tree({
		url:'../user/queryPowerTreeList?id='+roleid,
		lines:true,
		checkbox:true
		
	})
}

function openDialog(){
	$('#dia_id').dialog('open');
}
function closeDialog(){
	$('#dia_id').dialog('close');
}
function saveRolePower(){
	var roleId = $('#roleIdInput').val();
	var powerArr = $('#powerTree').tree('getChecked');
	var ids = "";
	/*<![CDATA[*/
	for(var i = 0; i < powerArr.length; i++){
		ids += ids == "" ? powerArr[i].id : ","+powerArr[i].id;
	}
	/*]]>*/
	alert(ids)
	$.ajax({
		url:'../user/saveRolePower',
		type:'post',
		data:{
			roleId:roleId,
			ids:ids
		},
		dataType:'json',
		success:function(result){
			if(result){
				closeDialog();
			}else{
				$.messager.alert('提示','绑定权限失败！','warn');
			}
		}
	})

}
