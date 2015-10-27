function BinaryTree(){
	this.root = null;
}

BinaryTree.prototype = {
	constructor: BinaryTree,

	add: function(value){
		var node{
			this.value = value;
			this.left = null;
			this.right = null;
		};
		var current  = this.root;
		
		function goOn(node, current){
			if (node.value < current.value){
				if (current.left === null){
					current.left = node;
				} else {
					goOn(node, current.left);
				}
			} else if (node.value > current.value){
				if (current.rght === null){
					curent.right = node;
				} else {
					goOn(node, current.right);
				}
			}
		}

		goOn(node, current);	
	},
	
	contains: function(value){
		var current = this.root;
		
		function goOn(value, current){
			if (current.value == value){
				return true;			
			}
			if (value < current.value){
				if (current.left === null){
					return false;
				} else {
					return goOn(value, current.left);
				}
			}
			if (value > current.value){
				if (current.right === null){
					return false;
				} else {
					return goOn(value, current.right);
				}
			}	
		}
		
		return goOn(value, current);
	},
	
	remove: function(value){
		var current = this.root;
		
		function goRight(current){
			if (current.right !== null){
				if (current.right.right === null && current.right.left === null){
					return current;
				} else {
					goRight(current.right);
				}
			} else if(current.left !== null){
				if (current.left.right === null && current.left.left === null){
					return current;
				} else {
					goRight(current.left);
				}
			}
		}
		
		function changeNode(current){
			if (current.left === null){
				current = current.right;
			} else if (current.right === null){
				current = current.left;
			} else {
				var node = goRight(current.left);
				if (node.right !== null){
					node.right.left = current.left;
					node.right.right = current.right;
					current = node.right;
					node.right = null;
				} else {
					node.left.left = current.left;
					node.left.right = current.right;
					current = node.left;
					node.left = null;
				}
			}	
		}

		function goOn(value, current){
			if (current.value > value ){
				if (current.left === null) return;
				if (current.left.value == value){
					changeNode(current.left);
				} else {
					goOn(value, current.left);
				}
			} else if (current.value < value){
				if (current.right === null) return;
				if (current.right.value == value){
					changeNode(current.right);
				} else {
					goOn(value, current.right);
				}
			}
		}

		if (current.value == value){
			changeNode(current);
		} else {
			goOn(value, current);		
		}
	}
}
