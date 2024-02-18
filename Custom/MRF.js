class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        // initialize a dummy node to point to the head of the list
        ListNode dummy = new ListNode(0, head);
        // initialize a previous pointer to the dummy node
        ListNode prev = dummy;
        // initialize a current pointer to the head of the list
        ListNode curr = head;
        // loop until current is null
        while (curr != null) {
            // initialize a tail pointer to the previous node
            ListNode tail = prev;
            // check if there are k nodes left in the list
            for (int i = 0; i < k; i++) {
                // move the tail pointer to the next node
                tail = tail.next;
                // if tail is null, return the dummy's next node
                if (tail == null) {
                    return dummy.next;
                }
            }
            // store the next node of the tail
            ListNode next = tail.next;
            // reverse the k nodes from current to tail
            ListNode[] reversed = reverse(curr, tail);
            // make the previous node point to the new head of the reversed segment
            prev.next = reversed[0];
            // make the current node point to the new tail of the reversed segment
            curr = reversed[1];
            // make the current node point to the next node
            curr.next = next;
            // update the previous node to the current node
            prev = curr;
            // update the current node to the next node
            curr = next;
        }
        // return the dummy's next node
        return dummy.next;
    }

    // helper method to reverse a segment of a linked list from head to tail
    // returns an array of two nodes: the new head and the new tail of the reversed segment
    private ListNode[] reverse(ListNode head, ListNode tail) {
        // initialize a previous pointer to null
        ListNode prev = null;
        // initialize a current pointer to head
        ListNode curr = head;
        // loop until current is equal to the tail's next node
        while (curr != tail.next) {
            // store the next node of current
            ListNode next = curr.next;
            // make current point to previous
            curr.next = prev;
            // update previous to current
            prev = curr;
            // update current to next
            curr = next;
        }
        // return an array of the new head and the new tail
        return new ListNode[]{prev, head};
    }
}
