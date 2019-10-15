package com.zcw.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.zcw.model.Hr;
import org.apache.ibatis.annotations.Select;

public interface HrMapper extends BaseMapper<Hr> {
    @Select("select * from hr where username=#{username}")
    Hr SelectByName(String username);
}
