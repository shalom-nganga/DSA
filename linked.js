function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var rotateRight = function(head, k) {
    if (!head || k === 0) {
        return head;
    }
    
    // Calculate the length of the linked list
    let length = 1;
    let tail = head;
    while (tail.next) {
        length++;
        tail = tail.next;
    }
    
    // Adjust k to be within the range [0, length)
    k = k % length;
    
    if (k === 0) {
        return head;
    }
    
    // Find the new tail of the rotated list
    let newTailIdx = length - k - 1;
    let newTail = head;
    for (let i = 0; i < newTailIdx; i++) {
        newTail = newTail.next;
    }
    
    // Update pointers to rotate the list
    let newHead = newTail.next;
    newTail.next = null;
    tail.next = head;
    
    return newHead;
};

// Test cases
// Example 1
// let head1 = new ListNode(1);
// head1.next = new ListNode(2);
// head1.next.next = new ListNode(3);
// head1.next.next.next = new ListNode(4);
// head1.next.next.next.next = new ListNode(5);
// let k1 = 2;
// console.log(rotateRight(head1, k1));  // Output: [4, 5, 1, 2, 3]

// Example 2
let head2 = new ListNode(0);
head2.next = new ListNode(1);
head2.next.next = new ListNode(2);
let k2 = 4;
console.log(rotateRight(head2, k2));  // Output: [2, 0, 1]
