class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def rotateRight(head, k):
    if not head or k == 0:
        return head
    
    # Calculate the length of the linked list
    length = 1
    tail = head
    while tail.next:
        length += 1
        tail = tail.next
    
    # Adjust k to be within the range [0, length)
    k = k % length
    
    if k == 0:
        return head
    
    # Find the new tail of the rotated list
    new_tail_idx = length - k - 1
    new_tail = head
    for _ in range(new_tail_idx):
        new_tail = new_tail.next
    
    # Update pointers to rotate the list
    new_head = new_tail.next
    new_tail.next = None
    tail.next = head
    
    return new_head

# Test cases
# Example 1
head1 = ListNode(1)
head1.next = ListNode(2)
head1.next.next = ListNode(3)
head1.next.next.next = ListNode(4)
head1.next.next.next.next = ListNode(5)
k1 = 2
print([node.val for node in rotateRight(head1, k1)])  # Output: [4, 5, 1, 2, 3]

# Example 2
head2 = ListNode(0)
head2.next = ListNode(1)
head2.next.next = ListNode(2)
k2 = 4
print([node.val for node in rotateRight(head2, k2)])  # Output: [2, 0, 1]
