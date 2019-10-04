/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview The class representing a basic cursor.
 * Used to demo switching between different cursors.
 * @author aschmiedt@google.com (Abby Schmiedt)
 */
'use strict';


/**
 * Class for the Hackathon cursor.
 * This cursor will allow users to get to the next/previous field or input by
 * using in and out, and the next/previous connection or block by using next or
 * previous.
 * @constructor
 * @extends {Blockly.Cursor}
 */
Blockly.HackathonCursor = function() {
  Blockly.HackathonCursor.superClass_.constructor.call(this);
};
Blockly.utils.object.inherits(Blockly.HackathonCursor, Blockly.Cursor);

/**
 * Decides what nodes to traverse and which ones to skip. It skips
 * fields, inputs and blocks.
 * @param {Blockly.ASTNode} node The AST node to check whether it is valid.
 * @return {boolean} True if the node should be visited, false otherwise.
 * @private
 */
Blockly.HackathonCursor.prototype.validForPrevAndNext_ = function(node) {
  var isValid = false;
  var type = node && node.getType();
  if (type == Blockly.ASTNode.types.OUTPUT ||
      type == Blockly.ASTNode.types.NEXT ||
      type == Blockly.ASTNode.types.PREVIOUS ||
      type == Blockly.ASTNode.types.WORKSPACE) {
    isValid = true;
  }
  return isValid;
};

/**
 * Decides what nodes to traverse and which ones to skip. It
 * skips everything except for fields and inputs.
 * @param {Blockly.ASTNode} node The AST node to check whether it is valid.
 * @return {boolean} True if the node should be visited, false otherwise.
 * @private
 */
Blockly.HackathonCursor.prototype.validForInAndOut_ = function(node) {
  var isValid = false;
  var type = node && node.getType();
  if (type == Blockly.ASTNode.types.FIELD ||
      type == Blockly.ASTNode.types.INPUT) {
    isValid = true;
  }
  return isValid;
};


/**
 * From the given node find either the next valid sibling or parent.
 * @param {Blockly.ASTNode} node The current position in the AST.
 * @return {Blockly.ASTNode} The parent AST node or null if there are no
 *     valid parents.
 * @private
 */
Blockly.HackathonCursor.prototype.findSiblingOrParent_ = function(node) {
  if (!node) {
    return null;
  }
  var nextNode = node.next();
  if (nextNode) {
    return nextNode;
  }
  return this.findSiblingOrParent_(node.out());
};

/**
 * Uses pre order traversal to navigate the Blockly AST. This will allow
 * a user to easily navigate the entire Blockly AST without having to go in
 * and out levels on the tree.
 * @param {Blockly.ASTNode} node The current position in the AST.
 * @return {Blockly.ASTNode} The next node in the traversal.
 * @private
 */
Blockly.HackathonCursor.prototype.getNextNode_ = function(node, valid_node) {
  if (!node) {
    return null;
  }
  var newNode = node.in() || node.next();
  if (valid_node(newNode)) {
    return newNode;
  } else if (newNode) {
    return this.getNextNode_(newNode, valid_node);
  }
  var siblingOrParent = this.findSiblingOrParent_(node.out());
  if (valid_node(siblingOrParent)) {
    return siblingOrParent;
  } else if (siblingOrParent) {
    return this.getNextNode_(siblingOrParent, valid_node);
  }
  return null;
};

/**
 * Get the right most child of a node.
 * @param {Blockly.ASTNode} node The node to find the right most child of.
 * @return {Blockly.ASTNode} The right most child of the given node, or the node
 *     if no child exists.
 * @private
 */
Blockly.HackathonCursor.prototype.getRightMostChild_ = function(node) {
  if (!node.in()) {
    return node;
  }
  var newNode = node.in();
  while (newNode.next()) {
    newNode = newNode.next();
  }
  return this.getRightMostChild_(newNode);

};

/**
 * Reverses the pre order traversal in order to find the previous node. This will
 * allow a user to easily navigate the entire Blockly AST without having to go in
 * and out levels on the tree.
 * @param {Blockly.ASTNode} node The current position in the AST.
 * @return {Blockly.ASTNode} The previous node in the traversal or null if no
 *     previous node exists.
 * @private
 */
Blockly.HackathonCursor.prototype.getPreviousNode_ = function(node, valid_node) {
  if (!node) {
    return null;
  }
  var newNode = node.prev();

  if (newNode) {
    newNode = this.getRightMostChild_(newNode);
  } else {
    newNode = node.out();
  }
  if (valid_node(newNode)) {
    return newNode;
  } else if (newNode) {
    return this.getPreviousNode_(newNode, valid_node);
  }
  return null;
};

/**
 * Find the next block or connection in the pre order traversal.
 * @return {Blockly.ASTNode} The next node, or null if the current node is
 *     not set or there is no next value.
 * @override
 */
Blockly.HackathonCursor.prototype.next = function() {
  var curNode = this.getCurNode();
  if (!curNode) {
    return null;
  }
  var newNode = this.getNextNode_(curNode, this.validForPrevAndNext_);

  if (newNode && newNode.getType() == Blockly.ASTNode.types.NEXT 
      && newNode.getLocation().targetConnection) {
    newNode = this.getNextNode_(newNode, this.validForPrevAndNext_) || newNode;
  }

  if (newNode) {
    this.setCurNode(newNode);
  }
  return newNode;
};

/**
 * Find the next field or input in the pre order traversal.
 * @return {Blockly.ASTNode} The next node, or null if the current node is
 *     not set or there is no next value.
 * @override
 */
Blockly.HackathonCursor.prototype.in = function() {
  // Add Hackathon code here.
};

/**
 * Find the previous block or connection in the pre order traversal.
 * @return {Blockly.ASTNode} The previous node, or null if the current node
 *     is not set or there is no previous value.
 * @override
 */
Blockly.HackathonCursor.prototype.prev = function() {
  var curNode = this.getCurNode();
  if (!curNode) {
    return null;
  }
  var newNode = this.getPreviousNode_(curNode, this.validForPrevAndNext_);

  if (newNode && newNode.getType() == Blockly.ASTNode.types.NEXT) {
    newNode = this.getPreviousNode_(newNode, this.validForPrevAndNext_) || newNode;
  }
  
  if (newNode) {
    this.setCurNode(newNode);
  }
  return newNode;
};

/**
 * Find the previous field or input in the pre order traversal.
 * @return {Blockly.ASTNode} The previous node, or null if the current node is
 *     not set or there is no previous value.
 * @override
 */
Blockly.HackathonCursor.prototype.out = function() {
  var curNode = this.getCurNode();
  if (!curNode) {
    return null;
  }
  var newNode = this.getPreviousNode_(curNode, this.validForInAndOut_);

  if (newNode && newNode.getType() == Blockly.ASTNode.types.NEXT) {
    newNode = this.getPreviousNode_(newNode, this.validForInAndOut_) || newNode;
  }
  
  if (newNode) {
    this.setCurNode(newNode);
  }
  return newNode;
};
