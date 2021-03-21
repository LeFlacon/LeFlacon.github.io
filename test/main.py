import os

path = os.getcwd()
print(path)
file_names = os.listdir(path)

for file_name in file_names:
    if(file_name.endswith(".md")):
        print('处理中……'+file_name)
        try:
            src = file_path + "/" + file_name
            myFun(src)
        except Exception as e:
            addLog(e, "error")