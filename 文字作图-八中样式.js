import plugin from '../../lib/plugins/plugin.js';
//QQ群：861646887
//GitHub：https://github.com/ovoox
//更多JS插件请访问GitHub
export class AnimeImagePlugin extends plugin {
  constructor() {
    super({
      name: '作图',
      dsc: '发送作图',
      event: 'message',
      priority: 500,
      rule: [
        {
          reg: /^#?作图1\s*(.*)/,
          fnc: 'zhiyu1'
        },
        {
          reg: /^#?作图2\s*(.*)/,
          fnc: 'zhiyu2'
        },
        {
          reg: /^#?作图3\s*(.*)/,
          fnc: 'zhiyu3'
        },
        {
          reg: /^#?作图4\s*(.*)/,
          fnc: 'zhiyu4'
        },
        {
          reg: /^#?作图5\s*(.*)/,
          fnc: 'zhiyu5'
        },
        {
          reg: /^#?作图6\s*(.*)/,
          fnc: 'zhiyu6'
        },
        {
          reg: /^#?作图7\s*(.*)/,
          fnc: 'zhiyu7'
        },
        {
          reg: /^#?作图8\s*(.*)/,
          fnc: 'zhiyu8'
        }
      ]
    });
  }


  async zhiyu1(e) {
    try {
      let message = typeof e.raw_message === 'string' ? e.raw_message : (typeof e.message === 'string' ? e.message : '');
      const match = message.match(this.rule[0].reg);
      let customText = match ? match[1].trim() : '';
      const url = `https://www.hhlqilongzhu.cn/api/shouxie/tu_shouxie_xiwang.php?text=${encodeURIComponent(customText)}`;
      await e.reply(segment.image(url));
    } catch (err) {
      logger.error(`[作图1] 发送图片失败: ${err.message}`);
    }
  }

  async zhiyu2(e) {
    try {
      let message = typeof e.raw_message === 'string' ? e.raw_message : (typeof e.message === 'string' ? e.message : '');
      const match = message.match(this.rule[1].reg);
      let customText = match ? match[1].trim() : '';
      const url = `https://www.hhlqilongzhu.cn/api/shouxie/tu_shouxie_xinniankuaile.php?text=${encodeURIComponent(customText)}`;
      await e.reply(segment.image(url));
    } catch (err) {
      logger.error(`[作图2] 发送图片失败: ${err.message}`);
    }
  }

  async zhiyu3(e) {
    try {
      let message = typeof e.raw_message === 'string' ? e.raw_message : (typeof e.message === 'string' ? e.message : '');
      const match = message.match(this.rule[2].reg);
      let customText = match ? match[1].trim() : '';
      const url = `https://www.hhlqilongzhu.cn/api/shouxie/tu_shouxie_langman.php?text=${encodeURIComponent(customText)}`;
      await e.reply(segment.image(url));
    } catch (err) {
      logger.error(`[作图3] 发送图片失败: ${err.message}`);
    }
  }

  async zhiyu4(e) {
    try {
      let message = typeof e.raw_message === 'string' ? e.raw_message : (typeof e.message === 'string' ? e.message : '');
      const match = message.match(this.rule[3].reg);
      let customText = match ? match[1].trim() : '';
      const url = `https://www.hhlqilongzhu.cn/api/shouxie/tu_shouxie_fengxiang.php?text=${encodeURIComponent(customText)}`;
      await e.reply(segment.image(url));
    } catch (err) {
      logger.error(`[作图4] 发送图片失败: ${err.message}`);
    }
  }

  async zhiyu5(e) {
    try {
      let message = typeof e.raw_message === 'string' ? e.raw_message : (typeof e.message === 'string' ? e.message : '');
      const match = message.match(this.rule[4].reg);
      let customText = match ? match[1].trim() : '';
      const url = `https://www.hhlqilongzhu.cn/api/shouxie/tu_shouxie_bubai.php?text=${encodeURIComponent(customText)}`;
      await e.reply(segment.image(url));
    } catch (err) {
      logger.error(`[作图5] 发送图片失败: ${err.message}`);
    }
  }

  async zhiyu6(e) {
    try {
      let message = typeof e.raw_message === 'string' ? e.raw_message : (typeof e.message === 'string' ? e.message : '');
      const match = message.match(this.rule[5].reg);
      let customText = match ? match[1].trim() : '';
      const url = `https://www.hhlqilongzhu.cn/api/shouxie/tu_shouxie_biezhiyiwodeai.php?text=${encodeURIComponent(customText)}`;
      await e.reply(segment.image(url));
    } catch (err) {
      logger.error(`[作图6] 发送图片失败: ${err.message}`);
    }
  }

  async zhiyu7(e) {
    try {
      let message = typeof e.raw_message === 'string' ? e.raw_message : (typeof e.message === 'string' ? e.message : '');
      const match = message.match(this.rule[6].reg);
      let customText = match ? match[1].trim() : '';
      const url = `https://www.hhlqilongzhu.cn/api/shouxie/tu_shouxie_baituo.php?text=${encodeURIComponent(customText)}`;
      await e.reply(segment.image(url));
    } catch (err) {
      logger.error(`[作图7] 发送图片失败: ${err.message}`);
    }
  }

  async zhiyu8(e) {
    try {
      let message = typeof e.raw_message === 'string' ? e.raw_message : (typeof e.message === 'string' ? e.message : '');
      const match = message.match(this.rule[7].reg);
      let customText = match ? match[1].trim() : '';
      const url = `https://www.hhlqilongzhu.cn/api/shouxie/tu_shouxie_airenxianaiji.php?text=${encodeURIComponent(customText)}`;
      await e.reply(segment.image(url));
    } catch (err) {
      logger.error(`[作图8] 发送图片失败: ${err.message}`);
    }
  }
}
