var request = require('superagent');
var expect = require('expect.js');
  
describe('Images availability', function(){
  
  it('Sinaptica background', function(done){
    request.get('https://raw.githubusercontent.com/sinaptica/curso-git/pb/adding-slide/reveal-slides/resources/img/sinaptica.jpg').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Distribuciones de Linux', function(done){
    request.get('https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('Git Background', function(done){
    request.get('http://img05.deviantart.net/312f/i/2013/060/b/6/git_wallpaper_clean_by_black_pixel-d5wmjnw.jpg').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('sin-git.jpg', function(done){
    request.get('https://raw.githubusercontent.com/sinaptica/curso-git/pb/adding-slide/reveal-slides/resources/img/sin-git.jpg').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('teamwork.png', function(done){
    request.get('https://raw.githubusercontent.com/sinaptica/curso-git/pb/adding-slide/reveal-slides/resources/img/teamwork.png').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('GitHub for Mac', function(done){
    request.get('https://mac.github.com/images/screen1.png').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('GitHub for Windows', function(done){
    request.get('https://windows.github.com/images/screenshot-overview@2x.png').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('Repositorio logo', function(done){
    request.get('http://brianbugh.me/images/page_git.png').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('Branching logo', function(done){
    request.get('https://greasyfork.org/forum/uploads/thumbnails/FileUpload/df/f87899bf1034cd4933c374b02eb5ac.png').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('Commit logo', function(done){
    request.get('http://plainicon.com/dboard/userprod/2800_a1826/prod_thumb/plainicon.com-50220-128px-3ba.png').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('Conflicto logo', function(done){
    request.get('https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/128/console.png').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('Merge logo', function(done){
    request.get('https://cdn0.iconfinder.com/data/icons/typicons-2/24/flow-merge-128.png').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('Fork logo', function(done){
    request.get('https://greasyfork.org/forum/uploads/thumbnails/FileUpload/df/f87899bf1034cd4933c374b02eb5ac.png').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('Tag logo', function(done){
    request.get('https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/128/tag.png').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('Buenas practicas: Usar etiquetas', function(done){
    request.get('https://igor.io/img/git-branching/version.png').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('Buenas practicas: Usar PR', function(done){
    request.get('https://assets-cdn.github.com/images/modules/features/jquery-jquery-pull-highlighted@2x.png').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('Buenas practicas: Code review', function(done){
    request.get('https://assets-cdn.github.com/images/modules/features/commit-comment-highlighted@2x.png').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('Buenas practicas: Branching model', function(done){
    request.get('http://lanziani.com/slides/gitflow/images/gitflow_1.png').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('Avatar: MaxiDev_', function(done){
    request.get('https://pbs.twimg.com/profile_images/523520650200113152/SKsEcfpW.jpeg').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  it('Avatar: Piero Blunda', function(done){
    request.get('https://avatars0.githubusercontent.com/u/5834891?v=3&s=460').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });

  
});
         
describe('Link to', function(){
  it('Wikipedia - Markdown', function(done){
    request.get('https://es.wikipedia.org/wiki/Markdown').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Wikipedia - Control de versiones', function(done){
    request.get('https://es.wikipedia.org/wiki/Control_de_versiones').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Wikipedia - Git', function(done){
    request.get('https://es.wikipedia.org/wiki/Git').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Git-Hub - Markdown Basics', function(done){
    request.get('https://help.github.com/articles/markdown-basics/').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Markdown Online Editor', function(done){
    request.get('http://jbt.github.io/markdown-editor/#bVNBbtswELzzFVs4gO3GltpremqTpgkQA0WTnoICoUVSpC1yBXJlJyn69y4pw84hgAnJ5HBmd2Y1gdkPRzfDenndyR1GreawknGrcB/gu3KEUYhvMrkGhqTN0IHRkoaooXOJLoSAj3BJsTu/hxouveInISS500BWg3GdPkGsM3QCHv4xvLGISR8vynQqASPcPKzuMsdVlC3IoEBF7EEWbnCBb1kdy+0OpQJHGXydDxsMpAMlkHyeqfk0lLp+/7qDhPCCAzQyQLIZkQmTEOJ26iEgtIgKJME+OnKhZQLfM2mdcZ2OQPqZFpmlxYJhCfSabMYycUy6M5UQd4jbBZeb/fpQ/DKI+bGWcXy8CvGV28pdTFMh4cqV/gAX55/Z4aenp43cydRE15M4m5khNOQwzOZ/BcDZbKrcbjqvLPluNr0F6VmMt6rp/Iv4x4vvC/FgXQL+PWKAMfA/M0vUp4u6bh3ZYV016OvNmmp/8H6pS/zz3GKnCbisbcA9OAO3U45p/Slus6NUSt7n8rld8ZPTSTmNVazgCnFdMsvyj7krGFlHdRb3UTGmiPcRN7qhVGfcQb2eL8BE9LC3rrEiZ+dC6l2U2YIsw4anRdEozll+ewGXo/Kc/QjjTIhBjfS5xMlkAvc0GJNHWmUOL7e6EI0D/Xi0wNG7Nr05f/s+52jjaXZ7GRMPQ2G85JZWLsY3necufdmqgqZ6vJwblHtdWkkvXP/z0rrWdryIax1NKYzH7WqTjpwJDe15lr0MTjapwtiWvfqIrnU4SI30cDzJc8ufBw7UD1QmENYdNttU5DZpqbTpJOl3HVEybLGVrj7hRpX21fV9pkYDSpI82s1zY3ixIn+MSfwH').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Wikipedia - GitHub', function(done){
    request.get('https://es.wikipedia.org/wiki/GitHub').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('GitHub features', function(done){
    request.get('https://github.com/features').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Git for Windows', function(done){
    request.get('http://msysgit.github.io/').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('GitHub for Mac]', function(done){
    request.get('https://mac.github.com/').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('GitHub for Windows]', function(done){
    request.get('https://windows.github.com/').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Generating SSH key]', function(done){
    request.get('https://help.github.com/articles/generating-ssh-keys/').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Branching model]', function(done){
    request.get('http://nvie.com/posts/a-successful-git-branching-model/').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Learn git branching', function(done){
    request.get('http://pcottle.github.io/learnGitBranching/').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Libro oficial de Git (En Inglés)', function(done){
    request.get('http://git-scm.com/book/en/v2').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Libro oficial de Git (En Español)', function(done){
    request.get('https://git-scm.com/book/es/v1/Empezando').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Preguntas frecuentes de Git', function(done){
    request.get('http://gitfaq.org/').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Git: la guía sencilla', function(done){
    request.get('http://rogerdudler.github.io/git-guide/index.es.html').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Referencia resumida de Git', function(done){
    request.get('http://ndpsoftware.com/git-cheatsheet.html').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Comandos útiles para git', function(done){
    request.get('http://jesuslc.com/2014/04/08/algunos-comandos-utiles-para-git/').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Comandos útiles para git II', function(done){
    request.get('http://ecapy.com/git-mostrar-grafico-de-ramas-en-consola/').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Git Extras', function(done){
    request.get('https://github.com/visionmedia/git-extras').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Git Prompt', function(done){
    request.get('http://volnitsky.com/project/git-prompt/').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Git Ignore', function(done){
    request.get('https://www.gitignore.io/').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('CodeSchool - Try Git', function(done){
    request.get('https://www.codeschool.com/courses/try-git').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Interactive CheatSheet for Print', function(done){
    request.get('http://git-tower.com/blog/git-cheat-sheet-detail/').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('One page CheatSheet', function(done){
    request.get('http://cheat-sheets.org/saved-copy/git-cheat-sheet.pdf').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  it('Atlassian tutorials', function(done){
    request.get('https://www.atlassian.com/git/tutorials/').end(function(err, res){
      expect(res).to.exist;
      expect(res.status).to.be(200);
      done();
    });
  });
  
  
});