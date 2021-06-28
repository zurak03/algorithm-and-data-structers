class Node{
    constructor(data, left = null, right = null){
        this.data = data; 
        this.left = left;
        this.right = right;
    }
}


class BST{
    constructor(){
        this.root = null;
    }
    add(data){
        const node = this.root;
        if(node === null){
            this.root = new Node(data);
        }
        else{
            const insertData = function(data) { 
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data)
                    }
                    else{
                        return insertData(node.left)
                    }
                }
                else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data)
                    }
                    else{
                        return insertData(node.right)
                    }
                }
        
            }
            return insertData(data)
        }
    }

    inOrder(){
        const fuc = (data) =>{
            console.log(this.root.data)
            fuc(this.root)
            console.log(this.root.left)
            console.log(this.root.right)
        } 
    }
}
