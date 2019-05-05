var board = new Array();
var added = new Array();
var score = 0;
var top = 240;
$(document).ready(function(e){
    newgame();
});
 
function newgame(){
    //初始化棋盘格
    init();
    //在随机两个各自声称的数字
    generateOneNumber();
    generateOneNumber();
}
 
function init(){
    score=0;
    document.getElementById("score").innerHTML=score;
    $("#gameover").css('display','none');
    for(var i = 0;i<4;i++){ for(var="" j="0;j<4;j++){" var="" gridcell="$(" #grid-cell-"+i+"-"+j);"="" gridcell.css("top",getpostop(i,j));="" gridcell.css("left",getposleft(i,j));="" }="" i="0;" i<4;i++){="" 初始化格子数组="" board[i]="new" array();="" board[i][j]="0;" 初始化判定合并的数组="" added[i]="new" added[i][j]="0;" updateboardview();="" 通知前端对board二位数组进行设定。="" function="" updateboardview(){="" 更新数组的前端样式="" $(".number-cell").remove();="" for="" (="" <="" 4;="" j++)="" {="" $("#grid-container").append('<div="" class="number-cell" id="number-cell-'+i+'-'+j+'">');
            var theNumberCell = $('#number-cell-'+i+'-'+j);
            if(board[i][j] == 0){
                theNumberCell.css('width','0px');
                theNumberCell.css('height','0px');
                theNumberCell.css('top',getPosTop(i,j));
                theNumberCell.css('left',getPosLeft(i,j));
            }else{
                theNumberCell.css('width','100px');
                theNumberCell.css('hegiht','100px');
                theNumberCell.css('top',getPosTop(i,j));
                theNumberCell.css('left',getPosLeft(i,j));
                //NumberCell覆盖
                theNumberCell.css('background-color',getNumberBackgroundColor(board[i][j]));//返回背景色
                theNumberCell.css('color',getNumberColor(board[i][j]));//返回前景色
                theNumberCell.text(board[i][j]);
            }
        }
    }
}
 
function generateOneNumber(){//生成随机的格子
    if (nospace(board)) 
        return false;
    
    //随机一个位置
    var randx = parseInt(Math.floor(Math.random()*4));
    var randy = parseInt(Math.floor(Math.random()*4));
    while(true){
        if (board[randx][randy] == 0) 
            break;
        randx = parseInt(Math.floor(Math.random()*4));
        randy = parseInt(Math.floor(Math.random()*4));
    }
    //随机一个数字
    var randNumber = Math.random()<0.8 0="" 2="" ?="" :="" 4;="" 在随机位置显示随机数字="" board[randx][randy]="randNumber;" shownumberwithanimation(randx,randy,randnumber);="" return="" true;="" }="" 事件响应循环="" $(document).keydown(function(event){="" switch="" (event.keycode)="" {="" case="" 37:="" left="" if(moveleft()){="" settimeout("generateonenumber()",210);="" getscore();="" generateonenumber();="" 每次新增一个数字就可能出现游戏结束="" settimeout("isgameover()",400);="" 300毫秒="" break;="" 38:="" up="" if(moveup()){="" 39:="" right="" if(moveright()){="" 40:="" down="" if(movedown()){="" });="" function="" isgameover(){="" if(nospace(board)&&nomove(board))="" gameover();="" gameover(){="" $("#gameover").css('display','block');="" isaddedarray(){="" 将判断能否合并的数组值置为0="" for(var="" i="0;i<4;i++){" j="0;j<4;j++){" added[i][j]="0;" moveleft(){="" 更多地细节信息="" 判断格子是否能够向左移动="" if(="" !canmoveleft(board))="" false;="" isaddedarray();="" 真正的moveleft函数="" 标准="" if(board[i][j]="" !="0){" (i,j)左侧的元素="" k="0;k<j;k++){" 落脚位置的是否为空="" &&="" 中间没有障碍物="" if(board[i][k]="=" noblockhorizontal(i="" ,="" k,="" j,="" board)){="" move="" showmoveanimation(i,="" j,i,k);="" board[i][k]="board[i][j];" board[i][j]="0;" continue;="" 落脚位置的数字和本来的数字相等="" else="" add="" if(added[i][k]!="0){//目标落脚点是否完成过合并" board[i][k+1]="board[i][j];" else{="" +="board[i][j];" added[i][k]="1;" score="" settimeout("updateboardview()",200);="" moveright(){="" 判断格子是否能够向右移动="" !canmoveright(board))="" 真正的moveright函数="">=0;j--){//最后一列的数字不可能向右移动
            if(board[i][j] !=0){
                //(i,j)右侧的元素
                for(var k = 3;k>j;k--){
                    //落脚位置的是否为空 && 中间没有障碍物
                    if(board[i][k] == 0 && noBlockHorizontal(i , j, k, board)){
                        //move
                        showMoveAnimation(i, j,i,k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    //落脚位置的数字和本来的数字相等 && 中间没有障碍物
                    else if(board[i][k] == board[i][j] && noBlockHorizontal(i , j, k, board)){
                        //move
                        showMoveAnimation(i, j,i,k);
                        //add
                         if(added[i][k]!=0){
                                board[i][k-1] = board[i][j];
                                board[i][j] = 0;
                        }
                        else{
                            board[i][k] += board[i][j];
                            board[i][j] = 0;
                            added[i][k] = 1;
                            score +=board[i][k];
                        }
                        continue;
                    }
                }
            }
        }
    setTimeout("updateBoardView()",200);
    return true;
}
 
function moveUp(){//更多地细节信息
    //判断格子是否能够向上移动
    if( !canMoveUp(board))
        return false;
    
    isaddedArray();
    //真正的moveUp函数//标准
    for(var j = 0;j<4;j++) 0="" for(var="" i="1;i<4;i++){//第一行的数字不可能向上移动" if(board[i][j]="" !="0){" (i,j)上面的元素="" k="0;k<i;k++){" 落脚位置的是否为空="" &&="" 中间没有障碍物="" if(board[k][j]="=" noblockvertical(j="" ,="" k,="" i,="" board)){="" move="" showmoveanimation(i,="" j,k,j);="" board[k][j]="board[i][j];" board[i][j]="0;" continue;="" }="" 落脚位置的数字和本来的数字相等="" else="" add="" if(added[k][j]!="0){" board[k+1][j]="board[i][j];" else{="" +="board[i][j];" added[k][j]="1;" score="" settimeout("updateboardview()",200);="" return="" true;="" function="" movedown(){="" 更多地细节信息="" 判断格子是否能够向下移动="" if(="" !canmovedown(board))="" false;="" isaddedarray();="" 真正的movedown函数="" 标准="" j="0;j<4;j++)">=0;i--){//最后一行的数字不可能向下移动
            if(board[i][j] !=0){
                //(i,j)上面的元素
                for(var k = 3;k>i;k--){
                    //落脚位置的是否为空 && 中间没有障碍物
                    if(board[k][j] == 0 && noBlockVertical(j , i, k, board)){
                        //move
                        showMoveAnimation(i, j,k,j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    //落脚位置的数字和本来的数字相等 && 中间没有障碍物
                    else if(board[k][j] == board[i][j] && noBlockVertical(j , i, k, board)){
                        //move
                        showMoveAnimation(i, j,k,j);
                        //add
                        if(added[k][j]!=0){
                            board[k-1][j] = board[i][j];
                            board[i][j] = 0;
                        }
                        else{
                            board[k][j] += board[i][j];
                            board[i][j] = 0;
                            added[k][j] = 1;
                            score +=board[k][j];
                        }
                        continue;
                    }
                }
            }
        }
    setTimeout("updateBoardView()",200);
    return true;
}
</4;j++)></0.8></4;i++){>