var pruneTree = function(root) {
    return determine(root) ? root : null;
    
    function determine(node){
        if(!node) return false;
        let a1 = determine(node.left);
        let a2 = determine(node.right);
        if (!a1) node.left = null;
        if(!a2) node.right = null;
        return node.val == 1 || a1 || a2;
    }
};