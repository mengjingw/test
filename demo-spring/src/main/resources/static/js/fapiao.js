	$(function() {
		queryindentList();
	})

	function queryindentList() {
		$('#animal').datagrid({ 
			toolbar:"#toolbar",
			pagination:true,
			pageList:[1,2,3,7,10],
			pageNumber:1,
			pageSize:3,
		    url:'../animal/queryanimal',
		    queryParams:{
		    	name:$("#tiao1").val()
		    },
		    columns:[[
		    		{field:'bo',checkbox:true},
		    	    {field:'id',title:'动物编号',width:500},
		    	    {field:'name',title:'动物名称',width:200},
		    	    {field:'sex',title:'性别',width:200,
		    	    	formatter: function(value,row,index){
		    	    		if(value==1){
		    	    			return "公";
		    	    		}
		    	    		if(value==2){
		    	    			return "母";
			    	    	}
						}
		    	    },
		    	    {field:'ck',title:'操作',
		        		formatter: function(value,row,index){				            		
		        			/*<![CDATA[*/return '<a href="javascript:upd(\''+row.id+'\')">修改</a>';/*]]>*/
		    			}
		        	}  
		    	     
		    	  ]]  
			
		}); 
	}
	//删除
	$('#removeBtn').click(function(){
		var hrarr = $('#animal').datagrid('getChecked');
		var sid = "",count = 0;
		/*<![CDATA[*/
		for (var i = 0; i < hrarr.length; i++) {
			sid += "'"+hrarr[i].id+"',";
			count++;
		}
		sid = sid.substring(0,sid.length-1);
		
		if(count>0 && confirm("是否删除"+count+"条数据？")){
			$.ajax({
			url: "../animal/deleteani",
			type: "post",
			data:{id:sid},
 			dataType: "json",
			success: function(data){
				if(data == 1){
					alert("删除成功！");
					queryindentList();   // 重新载入当前页面数据 
				}
			},
			error: function(){
				alert("请求失败");
			}
			});
		}else{
			alert("请您选择要删除的选项！");
		}
		/*]]>*/
		
	});
	
	//新增
	function CloseDialogone() {
		$('#add').dialog({
			closed:true
		})
	}
	$('#addBtn').click(function(){
		$('#add').dialog({
			closed:false
		})
		
	});
	function guanbi() {
		$.ajax({
			url:'../animal/addanimal',
			data:$("#fromid").serialize(),
			type:"post",
			dateType:"json",
			success:function(data){
				CloseDialogone();
				queryindentList();
			}
		})

	}
	//修改
	function upd(id) {
		$.get(
				'../animal/queryupdend',
				{id:id},
				function (data) {
					$("#fromid123").form("load",data);
					$('#update').dialog({
						closed:false
					})
				}
			)
	}
	function CloseDialogone1() {
		$('#update').dialog({
			closed:true
		})
	}
	function lala() {
		$.ajax({
			url:'../animal/updteanimal',
			data:$("#fromid123").serialize(),
			type:"post",
			dateType:"json",
			success:function(data){
				CloseDialogone1();
				queryindentList();
			}
		})
	}