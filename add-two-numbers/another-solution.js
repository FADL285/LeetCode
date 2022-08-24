/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const list = new ListNode();
  let head = list;

  let carry = false;
  while (l1 || l2 || carry) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + (carry ? 1 : 0);
    head.next = new ListNode(sum % 10);
    carry = sum > 9 ? true : false;
    l1 = l1?.next;
    l2 = l2?.next;
    head = head.next;
  }

  return list.next;
};

/**
 * Runtime: 184 ms
 * Memory Usage: 46.9 MB
 **/
