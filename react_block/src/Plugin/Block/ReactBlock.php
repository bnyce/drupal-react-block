<?php

namespace Drupal\react_block\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'React' Block.
 *
 * @Block(
 *   id = "react_block",
 *   admin_label = @Translation("React Block"),
 *   category = @Translation("React Block"),
 * )
 */
class ReactBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['content']['#markup'] = '<div id="ReactBlock"></div>';
    $build['#attached']['library'][] = 'react_block/react-block';
    return $build;
  }

}