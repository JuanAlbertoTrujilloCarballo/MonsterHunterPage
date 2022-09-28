package com.backend_mh.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.backend_mh.entity.model.Monster;

public interface IMonsterDao extends CrudRepository<Monster, Long>{

}
